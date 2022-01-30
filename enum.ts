enum Membership {
	Simple,
	Standard,
	Premium,
}

const mbship = Membership.Standard;
const mbshipReverse = Membership[2];
console.log(mbship);
console.log(mbshipReverse);

enum SoticalMedia {
	VK = 'VK',
	FACEBOOK = 'FACEBOOK',
	INSTAGRAM = 'INSTAGRAM',
}

const social = SoticalMedia.FACEBOOK;
console.log(social);
