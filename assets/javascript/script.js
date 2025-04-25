
/*hiệu ứng cho navbar*/
$(document).ready(function() {
    $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('header').addClass('sticky');
            } else {
                $('header').removeClass('sticky');
            }
    });
 });

 /*hiệu ứng cho backgr img và chữ*/
$(document).ready(function() {
    $(window).scroll(function() {
        const scrollPosition = $(this).scrollTop();
        
        const bgMoveAmount = scrollPosition * 0.2; 
        $('.slider__bg').css('transform', `translateY(-${bgMoveAmount}px)`);
        
        const leftImgMoveAmount = scrollPosition * 0.5; 
        $('.slider__img--left').css('transform', `translate(-${leftImgMoveAmount}px, -50%)`);
        
        const rightImgMoveAmount = scrollPosition * 0.5; 
        $('.slider__img--right').css('transform', `translate(${rightImgMoveAmount}px, -50%)`);
        
        const contentMoveAmount = scrollPosition * 0.3; 
        $('.slider__content').css('transform', `translateX(-${contentMoveAmount}px)`);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const topics = [
        { name: "Chào mừng mọi người đến với Culturista!!", tag: "#Welcome", replies: 2000 },
        { name: "Xin chào mình tên là Thọ Quang!!", tag: "#Wangp19", replies: 19 },
        { name: "Lụm cái top 1 nào", tag: "#Number1", replies: 10 },
        { name: "Kết bạn nào!", tag: "#Hello", replies: 20 }
    ];

    const contentArea = document.querySelector('.content-area .topic-list');

    topics.forEach(topic => {
        const topicColumn = document.createElement('div');
        topicColumn.classList.add('topic-conlumns');

        const topicContent = document.createElement('div');
        topicContent.classList.add('topic-content');

        const topicName = document.createElement('h4');
        topicName.classList.add('topic-name');
        topicName.textContent = topic.name;

        const repliesNums = document.createElement('h4');
        repliesNums.classList.add('replies-nums');
        repliesNums.textContent = topic.replies;

        topicContent.appendChild(topicName);
        topicContent.appendChild(repliesNums);

        const topicTags = document.createElement('div');
        topicTags.classList.add('topic-tags');

        const tagElement = document.createElement('p');
        tagElement.textContent = topic.tag;

        topicTags.appendChild(tagElement);

        topicColumn.appendChild(topicContent);
        topicColumn.appendChild(topicTags);

        contentArea.appendChild(topicColumn);
    });
});
