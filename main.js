enchant();

window.onload = function() {
    game = new Game(2048, 1536);
    game.fps = 24;
    falling_images = ['seef.jpg'];

    falling_images2 = ['images/56/1.png', 'images/56/2.png', 'images/56/3.png', 'images/56/4.png', 'images/56/5.png', 'images/56/6.png', 'images/56/delicious.png', 'images/56/devaintart.png', 'images/56/digg.png', 'images/56/dribbble.png', 'images/56/email.png', 'images/56/etsy.png', 'images/56/evernote.png', 'images/56/facebook.png', 'images/56/fastfm.png', 'images/56/flickr.png', 'images/56/forrst.png', 'images/56/forsquare.png', 'images/56/forstorm.png', 'images/56/github.png', 'images/56/googleplus.png', 'images/56/instagram.png', 'images/56/linkedin.png', 'images/56/myspace.png', 'images/56/orkut.png', 'images/56/path.png', 'images/56/pinterest.png', 'images/56/quora.png', 'images/56/reddit.png', 'images/56/rss.png', 'images/56/share.png', 'images/56/soundcloud.png', 'images/56/stumbleupon.png', 'images/56/technorati.png', 'images/56/timblr.png', 'images/56/twitter.png', 'images/56/twitter2.png', 'images/56/vimeo.png', 'images/56/wordpress.png', 'images/56/youtube.png'];
    //falling_images2 = ['http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/delicious-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/devaintart-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/digg-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/dribbble-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/email-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/etsy-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/evernote-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/facebook-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/fastfm-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/flickr-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/forrst-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/forsquare-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/forstorm-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/github-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/googleplus-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/instagram-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/linkedin-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/myspace-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/orkut-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/path-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/pinterest-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/quora-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/reddit-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/rss-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/share-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/soundcloud-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/stumbleupon-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/technorati-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/timblr-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/twitter-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/twitter2-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/vimeo-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/wordpress-icon.png', 'http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/64/youtube-icon.png'];

    game.preload(falling_images);
   // next_alphabet = [];
    game.preload(falling_images2);
    game.preload('w.png','iTech.png');

    //game.preload(['icx.png']);
   

    game.onload = function() {
        bear = new Sprite(100, 53);  
        bear.x = 0;                 
        bear.y = 200;               
        bear.width = 100;
        bear.height = 53;
        i=0
        bear.image = game.assets[falling_images[i]]; 
        //bear.frame = 0;

        background = new Sprite(310, 1536);  
        background.x = 1738
        background.y = 0;    
        background.image = game.assets['iTech.png'] 

        game.rootScene.addEventListener('touchstart', function(e){
            bear.x = e.localX
            bear.y = e.localY

        });

        game.rootScene.addEventListener('touchmove', function(e){
            bear.x = e.localX
            bear.y = e.localY
        });

        game.score = 0;

        game.rootScene.addEventListener('enterframe',function(){
            if(game.frame % 3 == 0){
                addBanana();
            }
            if(bear.opacity<0.1) {
                i = i+1;
                if(i==falling_images.length) {
                     var sprite = new Sprite(757, 757);
                     sprite.x=800
                     sprite.y=200
                    sprite.image = game.assets['w.png'];   
                    game.rootScene.addChild(sprite); 
                }    
                game.rootScene.removeChild(bear);
                bear = new Sprite(48, 48);  
                bear.x = 0;                 
                bear.y = 1024;               
                bear.width = 48;
                bear.height = 48;
                bear.image = game.assets[falling_images[i]];             
                game.rootScene.addChild(bear);
            }

            if(bear.x >= 1738){
                bear.opacity -= 0.1
            }    
//            if(game.rootScene.age > game.fps * 20){
//                game.end(game.score, game.score + " 本のバナナを取りました!");
//            }
        });

        game.rootScene.addChild(background);
        game.rootScene.addChild(bear);

    }
    game.start();
}

function addBanana(pos){
    var banana = new Sprite(56, 56);   
    banana.x = rand(2048);               
    banana.y = 0;
    banana.image = game.assets[falling_images2[rand(30)]];

    //banana.frame = 16;

    banana.addEventListener('enterframe', function(e) {
        if(this.intersect(bear)){       
            game.end();
            //game.rootScene.removeChild(this); 
            //game.score ++;                    
        }else{
            this.y += 13;                
        }
    });
    game.rootScene.addChild(banana);
}

function rand(num){
    return Math.floor(Math.random() * num);
}
