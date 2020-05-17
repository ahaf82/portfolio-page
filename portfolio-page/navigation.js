$(document).ready(function () {
            $('.toggle').click(function () {
                $('ul').show();
                $('.menu-closed').hide();
                $('.menu-open').show();
            });
            $('a').click(function () {
                if (mediaQuery.matches) {
                    $('ul').hide();
                    $('.menu-closed').show();
                    $('.menu-open').hide();
                }
            });
            $('#menu-open').click(function () {
                if (mediaQuery.matches) {
                    $('ul').hide();
                    $('.menu-closed').show();
                    $('.menu-open').hide();
                }
            });
        });

        function navbarDisplay(mediaQueryx) {
            if (mediaQuery.matches) {
                $('ul').hide();
            } else {
                $('ul').show();
            }
        };

        var mediaQuery = window.matchMedia("(max-width: 600px)");
        navbarDisplay(mediaQuery);
        mediaQuery.addListener(navbarDisplay);

        $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#success-alert").slideUp(500);
        });
        $(document).ready(function () {
            $("#success-alert").hide();
            $("#submit-button").click(function showAlert() {
                $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
                    $("#success-alert").slideUp(500);
                });
            });
        });