export abstract class PlayerBuilder {

    abstract buildComponent(contentId: string, width: number, height: number, platformPlayerUrl: string): JSX.Element

}