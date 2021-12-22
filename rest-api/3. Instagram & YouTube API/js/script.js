$.getJSON(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UC0kSe4J1ocRO-fD5bFXJPYA&key=AIzaSyC6fJPnmgvySNmCwnVigrSuBCsRZM7xTDM`, function (data) {

    let name = data.items[0].snippet.title;
    let subscribe = data.items[0].statistics.subscriberCount;
    let photo = data.items[0].snippet.thumbnails.high.url;

    console.log(data.items[0].snippet.title);
    console.log(data.items[0].statistics.subscriberCount);
    console.log(photo);

    $('#channel-name').html(`${name}`);
    $('#channel-subscribe').html(`${subscribe} Subscriber(s)`);
    $('#youtube-profile').attr("src", photo);
})

$.getJSON(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyC6fJPnmgvySNmCwnVigrSuBCsRZM7xTDM&part=snippet&channelId=UC0kSe4J1ocRO-fD5bFXJPYA&maxResults=1000`, function (data) {

    let index = Math.floor(Math.random() * data.items.length);
    let video = data.items[index].id.videoId;

    console.log(index);
    console.log(data);

    $('#youtube-video').attr("src", `https://www.youtube.com/embed/${video}?rel=0`);
})

