const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

var fs = require('fs');

var server = http.createServer();
//server.on('request', doRequest);

function getContentType(extension) {
    var contentType = {
      'html': 'text/html; charset=utf-8',
      'htm' : 'text/htm',
      'css' : 'text/css',
      'js' : 'text/javaScript; charset=utf-8',
      'vue' : 'text/javaScript; charset=utf-8',
      'json' : 'application/json; charset=utf-8',
      'jpeg' : 'image/jpeg',
      'jpg' : 'image/jpg',
      'gif' : 'image/gif',
      'png' : 'image/png',
      'ico' : 'image/vnd.microsoft.icon'
  };
  var fileType = contentType[extension];
  return fileType;
}

function encodingJudge(extension) {
  var result;
  if(extension=='png' || extension=='jpeg' || extension=='jpg'){
    result = 'binary';
  }else {
    result = 'utf-8'
  }
  return result;
}


server.on('request',
    function(req, res){
        var url = req.url; //リクエストからURLを取得
        var tmp = url.split('.'); //splitで . で区切られた配列にする
        var ext = tmp[tmp.length - 1]; //tmp配列の最後の要素(外部ファイルの拡張子)を取得
        var path = '.' + url; //リクエストされたURLをサーバの相対パスへ変換する
        if(path == './'){
          path = './index.html';
          ext = 'html';
        }
        fs.readFile(path, encodingJudge(ext) ,function(err,data){
            if(err){
              res.end();
            }else {
                res.writeHead(200, {'Content-Type': getContentType(ext)});
                res.write(data, encodingJudge(ext));
                res.end();
            }
        });
    }
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});