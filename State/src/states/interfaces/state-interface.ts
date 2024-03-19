export interface IState {
    publish(): new() => IState;
    render(): new() => IState;
}