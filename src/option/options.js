/**
 * 初始化界面
 */

$(function() {
    chrome.storage.sync.get( "Setting",(item)=>{
        $("#closeTabs").val(item.Setting.MatchString);
        if(item.Setting.AutoClockIn){
         $('#dateTime').val( item.Setting.CLockINCLockInDateTime)
            $('#btn5').css('background','#2aa81a')
            $('#btn5').css('color','#fff')
        }

        $("#closeTabs").blur(function (e) { 
            item.Setting.MatchString = $("#closeTabs").val();
            chrome.storage.sync.set({"Setting":item.Setting})
        });

     /**
     * happyClockIn
     */
     laydate.render({
        elem: '#dateTime'
        ,type: 'datetime'
        ,format: 'yyyy-MM-dd HH:mm:ss'
        ,done:function(value) {
            item.Setting.CLockINCLockInDateTime = value;
              chrome.storage.sync.set({"Setting":item.Setting},()=>{
               console.log("修改成功")
          });
        }
      }); 

      $("#btn5").click(()=>{
        if(item.Setting.AutoClockIn){
            $('#btn5').text('点击启动');
            $('#btn5').css('background','#d9d9d9')
            $('#btn5').css('color','#5f5959')
        }else{
            if ($('#dateTime').val()==''||$('#dateTime').val()==null){
                return  false;
            }
            $('#btn5').html('启动成功')
            $('#btn5').css('background','#2aa81a')
            $('#btn5').css('color','#fff')
        }
        item.Setting.CLockINCLockInDateTime = $('#dateTime').val();
        item.Setting.AutoClockIn = !item.Setting.AutoClockIn;
          chrome.storage.sync.set({"Setting":item.Setting},()=>{
      });
    })
  });
})

