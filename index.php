<html>
    <body>
        <h1>Demos</h1>
            <?php
            $dir = getcwd() . "/html/";  
            if (is_dir($dir))
                {
                if ($dh = opendir($dir))
                        {
                            while (($file = readdir($dh)) !== false)
                            {
                                if ($file != "." && $file != ".." /*&& filetype($dir . $file) == "dir"*/)
                                {
                                    echo "<li> <a href=html/" . $file . "> $file </a></li>";
                                }
                            }
                            closedir($dh);
                         }
                }
    ?>
    </body>
</html>

