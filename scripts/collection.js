var buildCollectionItemTemplate = function() {
     var template =
     '<div class="collection-album-container column fourth">'
   + '  <img src="assets/images/album_covers/T.jpg"/>'
   + '  <div class="collection-album-info caption">'
   + '    <p>'
   + '      <a class="album-name" href="album.html"> Sleeping Beauty </a>'
   + '      <br/>'
   + '      <a href="album.html"> Pyotr Ilyich Tchaikovsky </a>'
   + '      <br/>'
   + '      7 songs'
   + '      <br/>'
   + '    </p>'
   + '  </div>'
   + '</div>'
    ;
 return $(template);
};

$(window).load(function() {
    
     var $collectionContainer = $('.album-covers');
     
     $collectionContainer.empty();
 
     for (var i = 0; i < 12; i++) {
         var $newThumbnail = buildCollectionItemTemplate();
         $collectionContainer.append($newThumbnail);
     }
    
 });