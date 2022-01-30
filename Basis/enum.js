var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var mbship = Membership.Standard;
var mbshipReverse = Membership[2];
console.log(mbship);
console.log(mbshipReverse);
var SoticalMedia;
(function (SoticalMedia) {
    SoticalMedia["VK"] = "VK";
    SoticalMedia["FACEBOOK"] = "FACEBOOK";
    SoticalMedia["INSTAGRAM"] = "INSTAGRAM";
})(SoticalMedia || (SoticalMedia = {}));
var social = SoticalMedia.FACEBOOK;
console.log(social);
