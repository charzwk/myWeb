


document.addEventListener('DOMContentLoaded', function() {

    console.log('页面加载完成！');
    let imageList = document.getElementById('imglist');
    let images = imageList.getElementsByTagName('li');
    
    let currentIndex = 0;
    
    function showImage(index) {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("imgactive");
        }
    
        images[index].classList.add("imgactive"); // 显示当前索引对应的图片
    }
    
    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }
    
    setInterval(nextImage, 3000);

});