<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vue/Laravel SSR App</title>
</head>
<body>
<div id="app"></div>
{!! $ssr !!}
<script src="{{ asset('js/app-client.js') }}" type="text/javascript"></script>
</body>
</html>
