declare module '@skidding/launch-editor' {
  export default function launchEditor(
    file: string,
    onErrorCallback?: (fileName: string, errorMsg: string) => unknown
  ): void;
}
