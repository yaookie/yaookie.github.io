$(function () {
    //星期信息
    var weekDay = ["", "一", "二", "三", "四", "五", "六", "日"];
    //天气查询
    $("#weatherQueryBtn").click(function () {
        $.ajax({
            url: "https://restapi.amap.com/v3/weather/weatherInfo?key=d1a2f18faa2cdf01cf589c5dfa7e461f",
            type: "get",
            data: {
                "city": $("#cityInput").val()
            },
            dataType: "json",
            success: function (resp) {
                $("#weatherInfo").html(resp['lives'][0]['province'] + " " +
                    resp['lives'][0]['city'] + " " +
                    resp['lives'][0]['weather'] + " " +
                    resp['lives'][0]['temperature'] + "℃<br><br>"
                );

                $.ajax({
                    url: "https://restapi.amap.com/v3/weather/weatherInfo?key=d1a2f18faa2cdf01cf589c5dfa7e461f",
                    type: "get",
                    data: {
                        "city": $("#cityInput").val(),
                        "extensions": "all"
                    },
                    dataType: "json",
                    success: function (resp) {
                        // $("#weatherInfo").html(
                        //     resp['forecasts'][0]['province'] + " " + //省份
                        //     resp['forecasts'][0]['city'] + "<br>" //城市
                        // );

                        for (var i = 0; i < 4; i++) {
                            $("#weatherInfo").append(
                                resp['forecasts'][0]['casts'][i]['date'] + " 周" +
                                weekDay[resp['forecasts'][0]['casts'][i]['week']] + "<br>" +
                                resp['forecasts'][0]['casts'][i]['nighttemp'] + " ~ " +
                                resp['forecasts'][0]['casts'][i]['daytemp'] + "℃ " +
                                resp['forecasts'][0]['casts'][i]['dayweather'] +
                                "转" + resp['forecasts'][0]['casts'][i]['nightweather'] + "<br><br>"
                            );
                        }

                        $("#weatherInfo").append(
                            "数据发布时间：" + resp['forecasts'][0]['reporttime']
                        );
                    },
                    error: function () {
                        alert("请稍后重试！");
                    }
                })
            },
            error: function () {
                alert("请稍后重试！");
            }
        })
    });

    //IP查询
    //var cityName = ""; //城市名
    $("#IPQueryBtn").click(function () {
        $.ajax({
            url: "https://api.vore.top/api/IPdata",
            type: "get",
            data: {
                ip: $("#IPInput").val()
            },
            dataType: "json",
            success: function (resp) {
                $("#IPInfo").html("IP：" + resp['ipinfo']['text'] + "<br>归属地：" +
                    resp['ipdata']['info1'] + " " + resp['ipdata']['info2'] + " " + resp['ipdata']['info3'] + "<br>网络：" +
                    resp['ipdata']['isp'] + " " + resp['ipinfo']['type']
                )
            },
            error: function () {
                alert("请稍后重试！");
            }
        })
    });

    //B站用户信息查询
    $("#biliUserInfoQueryBtn").click(function () {
        $.ajax({
            async: false,
            url: "https://api.bilibili.com/x/space/acc/info", //"https://api.bilibili.com/x/web-interface/card",
            type: "get",
            data: {
                "mid": $("#uidInput").val()
            },
            dataType: "json",
            success: function (resp) {
                console.log(resp);
                $("#biliUserInfo").html(
                    "用户名：" + resp['data']['card']['name'] +
                    "<br>粉丝数：" + resp['data']['card']['fans'] +
                    "<br>关注数：" + resp['data']['card']['attention'] +
                    "<br>投稿数" + resp['data']['archive_count'] +
                    "<br>获赞数：" + resp['data']['like_num']
                )
            },
            error: function () {
                alert("请稍后重试！");
            }
        })
    });

    //QQ用户信息查询
    $("#QQUserInfoQueryBtn").click(function () {
        $.ajax({
            async: false,
            url: "https://api.uomg.com/api/qq.info",
            type: "get",
            data: {
                "qq": $("#qqInput").val(),
            },
            dataType: "json",
            success: function (resp) {
                $("#QQUserInfo").html(
                    "QQ：" + resp['qq'] +
                    "<br>昵称：" + resp['name']
                )
            },
            error: function () {
                alert("请稍后重试！");
            }
        })
    });

    //随机获取一句名言
    $("#quotaInfoQueryBtn").click(function () {
        $.ajax({
            async: false,
            url: "https://api.apiopen.top/api/sentences",
            type: "get",
            data: {

            },
            dataType: "json",
            success: function (resp) {
                $("#quotaInfo").append(
                    resp['result']['name'] +
                    "<br>来源：" + resp['result']['from'] + "<br><br>"
                )
            },
            error: function () {
                alert("请稍后重试！");
            }
        })
    });

    //随机获取一句毒鸡汤
    $("#yiyanInfoQueryBtn").click(function () {
        $.ajax({
            async: false,
            url: "https://api.wrdan.com/hitokoto",
            type: "get",
            data: {

            },
            dataType: "json",
            success: function (resp) {
                $("#yiyanInfo").append(
                    resp['text'] + "<br>来源：" +
                    resp['author'] + " " +
                    resp['source'] + "<br><br>"
                )
            },
            error: function () {
                alert("请稍后重试！");
            }
        })
    });

    //号码归属地查询
    $("#numberLocationInfoQueryBtn").click(function () {
        $.ajax({
            async: false,
            url: "https://api.vore.top/api/phone",
            type: "get",
            data: {
                "num": $("#numberInput").val()
            },
            dataType: "json",
            success: function (resp) {
                $("#numberLocationInfo").html(
                    resp['data']['prov'] + " " +
                    resp['data']['city'] + " " +
                    resp['data']['isp']
                )
            },
            error: function () {
                alert("请稍后重试！");
            }
        })
    });

    //清空随机一句
    $("#clearQuotaInfo").click(function () {
        $("#quotaInfo").html("");
    })

    $("#clearyiyanInfo").click(function () {
        $("#yiyanInfo").html("");
    })
})


