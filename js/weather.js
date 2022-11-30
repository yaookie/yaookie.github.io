$(function () {
    //星期信息
    var weekDay = ["", "一", "二", "三", "四", "五", "六", "日"];
    //天气查询
    $("#weatherQueryBtn").click(function () {
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

                for (var i = 1; i < 4; i++) {
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
    });
})

// {
//     "status": "1",
//         "count": "1",
//             "info": "OK",
//                 "infocode": "10000",
//                     "forecasts": [
//                         {
//                             "city": "武汉市",
//                             "adcode": "420100",
//                             "province": "湖北",
//                             "reporttime": "2022-11-17 20:00:40",
//                             "casts": [
//                                 {
//                                     "date": "2022-11-17",
//                                     "week": "4",
//                                     "dayweather": "晴",
//                                     "nightweather": "小雨",
//                                     "daytemp": "19",
//                                     "nighttemp": "8",
//                                     "daywind": "北",
//                                     "nightwind": "北",
//                                     "daypower": "≤3",
//                                     "nightpower": "≤3"
//                                 },
//                                 {
//                                     "date": "2022-11-18",
//                                     "week": "5",
//                                     "dayweather": "小雨",
//                                     "nightweather": "小雨",
//                                     "daytemp": "16",
//                                     "nighttemp": "12",
//                                     "daywind": "北",
//                                     "nightwind": "北",
//                                     "daypower": "≤3",
//                                     "nightpower": "≤3"
//                                 },
//                                 {
//                                     "date": "2022-11-19",
//                                     "week": "6",
//                                     "dayweather": "多云",
//                                     "nightweather": "多云",
//                                     "daytemp": "20",
//                                     "nighttemp": "9",
//                                     "daywind": "北",
//                                     "nightwind": "北",
//                                     "daypower": "≤3",
//                                     "nightpower": "≤3"
//                                 },
//                                 {
//                                     "date": "2022-11-20",
//                                     "week": "7",
//                                     "dayweather": "晴",
//                                     "nightweather": "晴",
//                                     "daytemp": "22",
//                                     "nighttemp": "12",
//                                     "daywind": "北",
//                                     "nightwind": "北",
//                                     "daypower": "≤3",
//                                     "nightpower": "≤3"
//                                 }
//                             ]
//                         }
//                     ]
// }