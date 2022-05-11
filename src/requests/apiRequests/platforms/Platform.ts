export abstract class Platform {

    public abstract getName(): string

    public abstract getColorClass(): string

    public abstract getDropdownButtonClass(): string

    public abstract getDropdownButtonIcon(): JSX.Element

}
