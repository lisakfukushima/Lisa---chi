function OnSearchBtn() {
    var text = $("#idSearchText").val();
    if (text != '') {
      //画面遷移（AddPage）
      $.mobile.changePage("#AddPage", { reverse: true });
      //データ生成
      Search(text);
    }

}

//検索処理
function Search(searchWord) {
    // タイトル変更
    $("#AddPageHeader").text(searchWord);

//test
  MailSearch2(searchWord);
  GDriveSearch(searchWord)


      // リスト初期化
      $("#TopListView").empty();
      clearMemo();
/*
      addMemo(searchWord);
      var list = getMemoList();
      for (var i in list) {
          var memo = list[i];
          var d = new Date(memo.time);
          var date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
          
          // $li = $("<li><a href='#' class='show'><h5></h5><h6></h6><p></p></a><a href='#' class='delete'>Delete</a></li>");
          $li = $("<li><a href='#' class='show'><h6></h6><p></p><label id=\"lll\"></label></a></li>");
          $li.data("id", memo.id);
          $li.find("h6").text(date);

          // $li.find("p").text(memo.text);
          $li.find("p").text(searchWord);
                  $li.find("lll").text(date);


          $("#TopListView").prepend($li);
      }
      if (list.length == 0) {
          $li = $("<li>No memo found</li>");
          $("#TopListView").prepend($li);
      }
      $("#TopListView").listview("refresh");  // Call refresh after manipulating list
*/

}

//Gmail検索
function MailSearch2(search)
{

  // ［検索］ボタンクリックでGmail索を実行
    $.getJSON('https://script.google.com/macros/s/AKfycbxY3pkdOdqIrlRRvbE860GzBVUsIqnm4ZekvCoruUa96X9moytM/exec',
      {
        word: search
      }
    )
    // 結果を取得したら…
    .done(function(data) {
      for(var i in data){
        // 中身が空でなければ、その値を表示
        if (data[i]) {

          // json data -----------------------------------
          //row["id"]=myMsgs[i][0].getId();
          //row["date"]=myMsgs[i][0].getDate();
          //row["subject"]=myMsgs[i][0].getSubject();
          //row["plainbody"]=myMsgs[i][0].getPlainBody();
          //row["body"]=myMsgs[i][0].getBody();

          var date =new Date().getTime();
          // $li = $("<li><a href='#' class='show'><h5></h5><h6></h6><p></p></a><a href='#' class='delete'>Delete</a></li>");
          $li = $("<li><a href='#' class='show'><p></p><h6></h6><p></p></a></li>");
          $li.find("p:first").text("GMail " + data[i].date);
          $li.find("h6").text(data[i].subject);
          $li.find("p:nth-child(3)").text(data[i].url);

          $("#TopListView").prepend($li);
          $("#TopListView").listview("refresh");  // Call refresh after manipulating list

        } else {
          alert("");
          //$('#address').val('該当する住所が存在しません。');
        }
      }
    });
}

//GoogleDrive検索
function GDriveSearch(search)
{

  // ［検索］ボタンクリックでGmail索を実行
    $.getJSON('https://script.google.com/macros/s/AKfycbxVw08EDJ6geylC6YuOarNQAFu12cdImAzzwDk5VDNBFw7eL4U/exec',
      {
        word: search
      }
    )
    // 結果を取得したら…
    .done(function(data) {
      for(var i in data){
        // 中身が空でなければ、その値を表示
        if (data[i]) {

          // json data -----------------------------------
          //row["id"]=myMsgs[i][0].getId();
          //row["date"]=myMsgs[i][0].getDate();
          //row["subject"]=myMsgs[i][0].getSubject();
          //row["plainbody"]=myMsgs[i][0].getPlainBody();
          //row["body"]=myMsgs[i][0].getBody();

          var date =new Date().getTime();
          // $li = $("<li><a href='#' class='show'><h5></h5><h6></h6><p></p></a><a href='#' class='delete'>Delete</a></li>");
          $li = $("<li><a href='#' class='show'><p></p><h6></h6><p></p></a></li>");
          $li.find("p:first").text("GoogleDrive " + data[i].date);
          $li.find("h6").text(data[i].subject);
          $li.find("p:nth-child(3)").text(data[i].url);

          $("#TopListView").prepend($li);
          $("#TopListView").listview("refresh");  // Call refresh after manipulating list

        } else {
          alert("");
          //$('#address').val('該当する住所が存在しません。');
        }
      }
    });
}



//郵便番号検索
function ZipSearch(zip) {
  // ［検索］ボタンクリックで郵便番号検索を実行
    $.getJSON('http://zipcloud.ibsnet.co.jp/api/search?callback=?',
      {
        zipcode: zip
      }
    )
    // 結果を取得したら…
    .done(function(data) {
      // 中身が空でなければ、その値を［住所］欄に反映
      if (data.results) {
        var result = data.results[0];
        alert(result.address1);
        //$('#address').val(result.address1 + result.address2 + result.address3);
      // 中身が空の場合は、エラーメッセージを反映
      } else {
        alert("");
        //$('#address').val('該当する住所が存在しません。');
      }
    });
}

function MailSearch(search)
{
// https://script.google.com/macros/s/AKfycbza814f6FhaCNLDZ7gVRhg5pnz_Epd6NdisDuz0FI01TXAVCs4/exec?word=test

  // ［検索］ボタンクリックで郵便番号検索を実行
    $.getJSON('https://script.google.com/macros/s/AKfycbza814f6FhaCNLDZ7gVRhg5pnz_Epd6NdisDuz0FI01TXAVCs4/exec?',
      {
        word: search
      }
    )
    // 結果を取得したら…
    .done(function(data) {
//alert("aa");
      //alert(data);
      for(var i in data){
      // 中身が空でなければ、その値を［住所］欄に反映
      if (data[i]) {
        //var result = data[i].results[0];
        alert(data[i].title);
        //$('#address').val(result.address1 + result.address2 + result.address3);
      // 中身が空の場合は、エラーメッセージを反映
      } else {
        alert("");
        //$('#address').val('該当する住所が存在しません。');
      }
      }
    });
}







///// Save memo and return to top page
function onSaveBtn() {
    var text = $("#Memo").val();
    if (text != '') {
        // Save to local storage
        addMemo(text);
        // Clear form
        $("#Memo").val("");
        // Initialize top page
        initTopPage();
    }
    $.mobile.changePage("#TopPage", { reverse: true });
}

///// Initialize top page
function initTopPage() {
    // $("#TopListView").empty();
    // var list = getMemoList();
    // for (var i in list) {
    //     var memo = list[i];
    //     var d = new Date(memo.time);
    //     var date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
        
    //     $li = $("<li><a href='#' class='show'><h3></h3><p></p></a><a href='#' class='delete'>Delete</a></li>");
    //     $li.data("id", memo.id);
    //     $li.find("h3").text(date);
    //     $li.find("p").text(memo.text);
    //     $("#TopListView").prepend($li);
    // }
    // if (list.length == 0) {
    //     $li = $("<li>No memo found</li>");
    //     $("#TopListView").prepend($li);
    // }
    // $("#TopListView").listview("refresh");  // Call refresh after manipulating list
}





///// Move to detail page
function onShowLink() {
    var $li = $(this).parent();
    var memoTitle = $li.find("h6").text();
    //var memoHtml = $li.find("p:nth-child(3)").html().replace(/\n/g, "<br>");
    var memoHtml = $li.find("p:nth-child(3)").text(); 

    $("#ShowPage h6").text(memoTitle);
    $("#ShowPage p").html(memoHtml);
    $.mobile.changePage("#ShowPage");
}

///// Delete memo
function onDeleteLink() {
    if (!confirm("Are you sure to delete this memo?")) {
      return;
    }
    var $li = $(this).parent();
    var id = $li.data("id");
    deleteMemo(id);
    initTopPage();
    
    // Return to top
    $.mobile.changePage("#TopPage", { reverse: true });
}

//リンクを開く
function OnLink() {
  //alert("OnLink");
  
  var $li = $(this).parent();
  var url = $li.find("p").text();

  window.open(url);
}

///// Called when app launch
function onReady() {
    initTopPage();
    $("#SaveBtn").click(onSaveBtn);
    $("#TopListView").on("click", "a.show", onShowLink);
    $("#TopListView").on("click", "a.delete", onDeleteLink);

    $("#SearchBtn").on("click", OnSearchBtn);

    $("#linkLabel").on("click", OnLink);
    
}

$(onReady); // on DOMContentLoaded

