export interface visitor{
    visit1(vis:vistorObject):void
    visit2(vis:vistorObject):void
}


interface vistorObject{
    accept(vis:visitor):void;
}