$(function() {
    var tKillNames = ["You"];//You can add or remove "teammates" here  
    var ctKillNames = ["Enemies", "Discord"]; //You can add or remove "enemies" here  
    var weapons = ["ak47", "deagle", "awp" /*, "g3sg1", "m4a4"*/]; //You can add or remove weapons here by removing or adding the "/" 
    var $killFeedContainer = $('.kill-feed');
    var $killFeedElement = $('.kill-feed > div').hide();

    function handleKillFeed() {
        var $newFeedElement = $killFeedElement.clone();
        $newFeedElement.find('.weapons img:first-child').attr('src', './images/' + weapons[Math.floor(Math.random() * weapons.length)] + '.png'); //drawing a weapon
        $newFeedElement.find('.t').text(tKillNames[Math.floor(Math.random() * tKillNames.length)]); //drawing a "teammate"
        $newFeedElement.find('.ct').text(ctKillNames[Math.floor(Math.random() * ctKillNames.length)]);//drawing an "enemy"
        $killFeedContainer.append($newFeedElement.show().delay(2000).fadeOut(1000, function() { //drawing a container
            $(this).remove()
        }))
    }
    $(document).on("contextmenu", function(e) {
        e.preventDefault()
    });
    window.setInterval(handleKillFeed, 500)// The time between kills (the smaller the value the faster the speed)
}); 
