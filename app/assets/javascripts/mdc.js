$(document).on('turbolinks:load', function() {
    window.mdc.autoInit();
    let drawer = new mdc.drawer.MDCPersistentDrawer($('.mdc-persistent-drawer')[0]);
    $('.menu').click(() => drawer.open = true);
});
