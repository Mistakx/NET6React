export abstract class SpecificSearch {

    abstract getType(): string
    abstract getButtonText(): string
    abstract defaultSearch(searchQuery: string, accessToken: string, limit: number, page: number): any
}