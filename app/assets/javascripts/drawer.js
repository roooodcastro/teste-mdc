$(document).on('turbolinks:load', function() {
    let menu = new mdc.menu.MDCSimpleMenu($('#user_options_menu')[0]);
    document.querySelector('.mdc-persistent-drawer__header-userinfo').addEventListener('click', () => menu.open = !menu.open);

    $(document).on('click', '.mdc-persistent-drawer__header-userinfo', function(ev) {
        debugger;
        menu.open = !menu.open;
        ev.preventDefault();
    });
});
