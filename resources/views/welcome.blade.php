<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>My server side rendered app</title>
    <script defer src="{{ mix('js/app-client.js') }}"></script>
</head>
<body>
{{--<div id="app">--}}
{{--    <h1>Hellou there</h1>--}}
{{--</div>--}}

{!! ssr('js/app-server.js')->render() !!}
</body>
</html>
