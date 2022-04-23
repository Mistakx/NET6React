export abstract class PlayerCreator {

    abstract create(contentId: string, width: number, height: number, platformPlayerUrl: string): JSX.Element

}