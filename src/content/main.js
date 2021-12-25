import  Vue  from 'vue'
import app from './components/app.vue'



function joinContent () {
    const div = document.createElement('div')
    div.id = 'joinContentApp'
    document.body.appendChild(div)
    console.log(div)
}
joinContent()
new Vue({
    render: h => h(app),
}).$mount('#joinContentApp')


$(()=>{
    ((h, i, c)=>{
        switch (window.location.hostname) {

            case 'jztaudit.jd.com':
                h();
                break;
            case 'img1.360buyimg.com':
                i();
                break;
            case 'erp.jd.com':
                c();
                break;
            default:
                console.log("不执行")
        }
    })(()=>{
        chrome.storage.sync.get('Setting', (i) => {
            if (i.Setting.AutoHiddenHeader) {
                $("#header").css('display', 'none');
            }
        });
    },()=>{
        $(document.body).append("<button class='img_btn' id='img_btn1'>《</button>" +
            "<button class='img_btn' id='img_btn2'>》</button>")
        $(".img_btn").css({
            "width": "60px",
            "height": "60px",
            "background-color": "rgba(36, 36, 36, 0.5)",
            "position": "fixed",
            "color": "#FCFCFC",
            "top": "45%",
            "border-radius": "30px",
            "font-size": "30px",
        });
        $("#img_btn1").css('left', '0')
        $("#img_btn2").css('right', '0')
        let u = 0;
        $(document).on('click', '#img_btn1', () => {
            u = (u + 90) % 360;
            $("body>img").css('transform', 'rotate(' + u + 'deg)');

        })
        $(document).on('click', '#img_btn2', () => {
            u = (u - 90) % 360;
            $("body>img").css('transform', 'rotate(' + u + 'deg)');
        })
    },(f = (msTime) => {
        let time = msTime / 1000;

        let hour = Math.floor(time / 60 / 60);

        hour = hour.toString().padStart(2, "0");

        let minute = Math.floor(time / 60) % 60;

        minute = minute.toString().padStart(2, "0");

        let second = Math.floor(time) % 60;

        second = second.toString().padStart(2, "0");

        return `${hour}:${minute}:${second}`;
    },clockIN = ()=>{
        var btn = $("#clockLink > button");
        btn.trigger("click");
        console.log("任务 完成");
    })=>{
        console.log("你好")
        chrome.storage.sync.get('Setting', (data) => {
            if (data.Setting.AutoClockIn) {
                let date = new Date(data.Setting.CLockINCLockInDateTime);
                // 有三种方式获取
                let cl = date.getTime();
                let cr = new Date().getTime();
                if (cr > cl) {
                    alert("设置时间晚于当前时间，请重新设置");
                } else {
                    alert("早上好 一人一卡 有序通行 请~" + f(cl - cr))
                    setTimeout( () =>{
                        clockIN();

                        data.Setting.AutoClockIn = false;
                        chrome.storage.sync.set({"Setting": data.Setting})
                    }, cl - cr);
                }
            }
        });

    })
})
