define(['views/collectionView', 'services/collectionService'],  function(
    collectionView,
    collectionService,
) {
    var externals = {};
    var internals = {};

    externals.start = function() {
        internals.bindEventHandlers();
        collectionView.render();
        
    };

    internals.bindEventHandlers = function() {
        collectionView.bind('collectionView', internals.changeMeHandler);
        collectionView.bind('randomPhotoView', internals.randomPhotoHandler);
    };

    internals.changeMeHandler = function() {
        console.log("inside function")
        collectionService.list().then(collectionView.render);
    };

    internals.randomPhotoHandler = function(){
       console.log("random photo handler") 
        collectionService.random().then(collectionView.renderRandom);
    }
    return externals;
});
