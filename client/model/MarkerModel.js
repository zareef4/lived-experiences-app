export default class MarkerModel {
  id;
  latlon;
  title;
  description;
  isGoodEvent;

  constructor(id, latlon, title, desc, isGoodEvent) {
    this.id = id;
    this.latlon = latlon;
    this.title = title;
    this.description = desc;
    this.isGoodEvent = isGoodEvent;
  }
}
