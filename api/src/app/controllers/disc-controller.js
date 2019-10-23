const db = require("../../config/db");
const Page = require("../model/Page");
const ResponseHelper = require('../helpers/ResponseHelper');

exports.list = (req, res) => {

    var page = (!req.query.page ? 1 : req.query.page);
    var size = (!req.query.size ? 10 : req.query.size);
    var name = (!req.query.name ? '' : req.query.name);
    let total = 0;
    let offset = 0;

    if (parseInt(page)<=0){  
      return res.status(400).send({"error": 400, "message": "Invalid page number"});    
    }

    if (page>1 && size>0){
      offset = (size*(page-1));
    }

    db.query("SELECT count(*) as total FROM discs", function (error, result, fields) {
      if (error) throw error;
      
      total = result[0].total;

      var query = ( name=='' ? "SELECT id, name, artist FROM discs LIMIT ? OFFSET ?" : "SELECT id, name, artist FROM discs WHERE name LIKE ? LIMIT ? OFFSET ?" );
      var params = ( name=='' ? [parseInt( (size>0) ? size : total ), parseInt(offset)] : ['%' + name + '%', parseInt( (size>0) ? size : total ), parseInt(offset)]);

      db.query(query, params, function (error, result, fields) {
        if (error) throw error;
    
        let prev = ( (page>1) ? ResponseHelper.hateoas(`${req.protocol}://${req.get("host")}${req.originalUrl}`, (parseInt(page)-1)) : `` );  
        let next = ( (page<(total/size)) ? ResponseHelper.hateoas(`${req.protocol}://${req.get("host")}${req.originalUrl}`, (parseInt(page)+1)) : `` );
    
        let pageable = new Page(prev, next, total, result);
        
        return res.send(pageable);
      });

    });

};

exports.create = (req, res) => {
  
  db.query('INSERT INTO discs SET ?', req.body, function (error, results, fields) {
    if (error) throw error;

    return res.location(`${req.protocol}://${req.get("host")}${req.originalUrl}/${results.insertId}`)
        .status(201)
        .send();

  });

};

exports.fetch = (req, res) => {
  let id = req.params.id;

  if (!id)
    return res.status(400).send({"error": 400, "message": "Disc id not provided"});
  
  db.query("SELECT * FROM `discs` WHERE `id` = ?", req.params.id, function (error, result, fields) {
    if (error) throw error;
    
    if (!result[0])
      return res.status(404).send();

    return res.send(result[0]);
  });

};
exports.update = (req, res) => {

  let disc = req.body;
  let id = req.params.id;

  if (!id || !disc)
    return res.status(400).send({"error": 400, "message": "Bad request for disc"});

    db.query("SELECT * FROM `discs` WHERE `id` = ?", id, function (error, result, fields) {
      if (error) throw error;
      
      if (!result[0])
        return res.status(404).send();
    });

    db.query('UPDATE discs SET name = ?, artist = ?, year = ?, tracks = ?, gender = ? WHERE id = ?', [disc.name, disc.artist, disc.year, disc.tracks, disc.gender, id], function (error, result, fields) {
      if (error) throw error;
      
      return res.send(disc);

    });
};

exports.delete = (req, res) => {  
  let id = req.params.id;
  if (!id)
      return res.status(400).send({"error": 400, "message": "Disc id not provided"});
  
  db.query("SELECT * FROM `discs` WHERE `id` = ?", id, function (error, result, fields) {
    if (error) throw error;
        
    if (!result[0])
      return res.status(404).send();
  });
  
  db.query('DELETE FROM discs WHERE id = ?', [id], function (error, results, fields) {
      if (error) throw error;

      return res.status(204).send();
  });
};