use Rack:Static,
    :urls => ["/images", "/js", "/templates", "/json"],
    :root => "src"

run lamda { |env|
    [
        200,
        {
            'content-type' => 'text/html',
            'Cache-control' => 'public, max-age=86400'
        },
        File.open('src/index.html', File::RDONLY)
    ]
}