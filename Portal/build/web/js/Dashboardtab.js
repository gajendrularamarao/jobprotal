 
            $(function () {
                //                $.jqx.theme = 'energyblue';

                $('#jqxTabs').jqxTabs({width: '92%', theme: 'energyblue', height: '550', position: 'top'});


            });
      

            $(function () {
                setNavigation();

            });

            function setNavigation() {
                var path = window.location.pathname;
                path = path.match(/[^\/]+$/)[0];
                // path = decodeURIComponent(path);
                $(".nav a").each(function () {
                    var href = $(this).attr('href');
                    if (path === href) {
                        if (path === 'Dashboard.jsp')
                        {
                            $(this).closest('li').addClass('first-current');
                        }
                        else if (path === null)
                        {
                            $(this).closest('li').addClass('current');
                        }
                    }
                    else if (path === null)
                    {
                        $(this).closest('li').addClass('first-current');
                    }
                    else
                    {
                        $(this).closest('li').addClass('non-current');
                    }
                });
            }
     
