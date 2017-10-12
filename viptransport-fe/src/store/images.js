export default{

    getList: function setImageIds(){
        return [
            { url: "/static/gallery/1.png" },
            { url: "/static/gallery/2.png" },
            { url: "/static/gallery/3.png" },
            { url: "/static/gallery/4.png" },
            { url: "/static/gallery/5.jpg" },
            { url: "/static/gallery/24.jpg" }, 
            { url: "/static/gallery/40.jpg" },  
            { url: "/static/gallery/6.png" },
            { url: "/static/gallery/11.jpg" },
            { url: "/static/gallery/25.png" },  
            { url: "/static/gallery/12.jpg" },
            { url: "/static/gallery/13.jpg" },
            { url: "/static/gallery/14.jpg" },
            { url: "/static/gallery/15.png" },
            { url: "/static/gallery/16.jpg" },
            { url: "/static/gallery/17.jpg" },
            { url: "/static/gallery/18.jpg" },
            { url: "/static/gallery/19.jpg" },
            { url: "/static/gallery/20.jpg" },
            { url: "/static/gallery/21.jpg" },
            { url: "/static/gallery/22.jpg" },
            { url: "/static/gallery/44.jpg" },  
            { url: "/static/gallery/23.jpg" },
            { url: "/static/gallery/26.jpg" },
            { url: "/static/gallery/27.jpg" },
            { url: "/static/gallery/28.png" },
            { url: "/static/gallery/29.jpg" },
            { url: "/static/gallery/30.jpg" },
            { url: "/static/gallery/31.jpg" },
            { url: "/static/gallery/32.jpg" },
            { url: "/static/gallery/33.jpg" },
            { url: "/static/gallery/34.jpg" },
            { url: "/static/gallery/35.jpg" },
            { url: "/static/gallery/36.jpg" },
            { url: "/static/gallery/37.jpg" },
            { url: "/static/gallery/38.jpg" },
            { url: "/static/gallery/39.jpg" },
            { url: "/static/gallery/41.jpg" },
            { url: "/static/gallery/42.jpg" },
            { url: "/static/gallery/43.jpg" },
          ];
    },
    getOrderedList: function(){
        
        var images = this.getList();
        var counter = 1;

        images.forEach(function(image){
            image.id = counter;
            counter++;
        });

        return images;
    }
}