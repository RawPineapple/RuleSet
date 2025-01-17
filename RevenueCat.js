const mapping = {
  'Jazzed/': ['plus','upahead_annual']
};

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"], 
    obj = JSON.parse($response.body);

var ddgksf2013 = {
    is_sandbox: !1,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    period_type: "normal",
    expires_date: "2099-12-18T01:04:17Z",
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: "2022-09-08T01:04:18Z",
    purchase_date: "2022-09-08T01:04:17Z",
    store: "app_store"
};

var ddgksf2021 = {
    grace_period_expires_date: null,
    purchase_date: "2022-09-08T01:04:17Z",
    product_identifier: "com.ddgksf2013.premium.yearly",
    expires_date: "2099-12-18T01:04:17Z"
};

const match = Object.keys(mapping).find(e => ua.includes(e));

if (match) {
    let [e, s] = mapping[match];
    s ? (ddgksf2021.product_identifier = s, obj.subscriber.subscriptions[s] = ddgksf2013) 
      : obj.subscriber.subscriptions["com.ddgksf2013.premium.yearly"] = ddgksf2013;
    obj.subscriber.entitlements[e] = ddgksf2021;
}

$done({body: JSON.stringify(obj)});
