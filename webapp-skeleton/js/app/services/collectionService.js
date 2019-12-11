define(function() {
    var internals = {}; // internal state
    var externals = {}; // external api
    
    function getPhotos(photos) {
        
        return photos.map(photos => ({
    
            name: photos.user.name,
            
            picture: photos.cover_photo.urls.small
        }));
        
    }

    externals.list = function() {
       
        return new Promise(((resolve, reject) => {
            $.ajax({
                url : 'https://api.unsplash.com/collections/featured/?client_id=522b095141d7744f399fce57eea1faa0c70e6505dd32304ac2ec94889fc7960f',
            })
                .done(result => resolve(getPhotos(result)))
                .fail(reject);
        }));
    }

    externals.random = function(){
    
        return new Promise(((resolve, reject) => {

            $.ajax({
                url : 'https://api.unsplash.com/photos/random/?client_id=522b095141d7744f399fce57eea1faa0c70e6505dd32304ac2ec94889fc7960f',
                success: function(data){resolve(data)},
                error: function(error){reject(error)}
            })
            

        }));
    }

    return externals;
});
