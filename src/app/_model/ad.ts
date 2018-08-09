export class Ad {
    hasFurniture: boolean;
    image: string;
    title: string;
    subtitle: string;

    constructor(raw: any = {}) {
        // console.log('raw.advertisementAssets[0] ', raw.advertisementAssets['0']);
        Object.assign(this, {
            image:      (!!raw.advertisementAssets['0'] ? raw.advertisementAssets['0'].advertisementThumbnails.inventory_m.url : null),
            title:      raw.title,
            subtitle:   raw.realestateSummary.address.fullAddress,
            price:      raw.advertisementPrice.baseRent,
            rooms:      raw.realestateSummary.numberOfRooms,
            space:      raw.realestateSummary.space,
        });
    }
}
