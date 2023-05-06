type InputEvent = Event & { target: HTMLInputElement };

export function openFileUploadDialog(): Promise<InputEvent> {
  return new Promise(resolve => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = event => resolve(event as InputEvent);
    input.click();
  });
}
