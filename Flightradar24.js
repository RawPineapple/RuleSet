#!name=Flightradar24
#!desc=破解Flightradar24会员
#!category=Unlock

[Script]
flightradar24 = type=http-request, pattern=^https?:\/\/mobile\.flightradar24\.com\/mobile\/(user-session|\w{9}), script-path=https://github.com/ddgksf2013/dev/raw/main/flightradar24.js, requires-body=true, timeout=60

[MITM]
hostname = %APPEND% mobile.flightradar24.com