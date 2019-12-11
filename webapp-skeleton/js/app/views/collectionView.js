define(function() {
    var internals = {
        handlers: {},
        elements: {}
    };

    var externals = {};

    internals.createButton = function() {
       return $('#main-button');
       
    };

    internals.createButton2 = function(){
        return $('#random-photo');
    }

    internals.createPhotoCard = function(photos) {
        
        return (
            '<div class="box">' +
            '<div class="div1"><p><strong>Author: </strong>' + photos.name + '</p></div>' +
            '<div class="div2">' + '<div class="fadein"><img src=' + photos.picture + '</></div></div>' +
            '</div>'
        );
    };

    internals.createRandomPhotoCard = function(photos) {
        console.log(photos)
        return (
            '<div class="box">' +
            '<div class="div1"><p><strong>Author: </strong>' + photos.user.name + '</p></div>' +
            '<div class="div2">' + '<div class="fadein"><img src=' + photos.urls.full + '</></div></div>' +
            '</div>'
        );
    };


    internals.renderPhoto = function(photos) {
        if (internals.elements.photoCard) {
            internals.elements.app.empty();
        
        }

        photos.forEach(element => {
            internals.elements.photoCard = $(internals.createPhotoCard(element));
            internals.elements.app.append(internals.elements.photoCard);
        });
    
    };

    internals.renderRandomPhoto = function(photos){
        if (internals.elements.photoCard) {
            internals.elements.app.empty();
        
        }

            internals.elements.photoCard = $(internals.createRandomPhotoCard(photos));
            internals.elements.app.append(internals.elements.photoCard);
    }

    
    internals.renderButton = function() {
        if (internals.elements.button) {
            return;
        }

        internals.elements.button = $(internals.createButton());
        internals.elements.button2 = $(internals.createButton2());
        internals.elements.button.click(internals.handlers['collectionView']);

        internals.elements.button2.click(internals.handlers['randomPhotoView']);
    };

    externals.bind = function(event, handler) {
        internals.handlers[event] = handler;
    };

    externals.render = function(photo) {
        internals.elements.app = $('#app');
        internals.renderButton();

        if (photo) {
            internals.renderPhoto(photo);
        }
    };

    externals.renderRandom = function(photo){
         internals.elements.app = $('#app');
         internals.renderButton();

         if(photo){
             internals.renderRandomPhoto(photo);
         }

    }

    return externals;
});
