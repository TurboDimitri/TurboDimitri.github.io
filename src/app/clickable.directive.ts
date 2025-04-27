import {
    Directive,
    ElementRef,
    InputSignal,
    OnDestroy,
    OutputEmitterRef,
    Renderer2,
    effect,
    inject,
    input,
    output,
  } from '@angular/core';
  
  interface Clickable {
    itemClicked: OutputEmitterRef<void>;
    clickable: InputSignal<boolean | undefined> | InputSignal<boolean>;
  }
  
  @Directive({
    selector: '[appClickable]',
    standalone: true,
  })
  export class ClickableDirective implements OnDestroy, Clickable {
    itemClicked = output<void>();
    clickable = input(false);
  
    private elementRef = inject(ElementRef);
    private renderer = inject(Renderer2);
  
    /**
     * references for event listeners to destroy them when directive is destroyed
     */
    private clickMouseRef: (() => void) | null = null;
    private clickKeyboardRef: (() => void) | null = null;
  
    /**
     * when using this as hostDirective, it needs to get the reference not on the component itself, but on the first child element
     */
    get elRef(): ElementRef {
      return (
        this.elementRef.nativeElement.children[0] ?? this.elementRef.nativeElement
      );
    }
  
    clickableChangeEffect = effect(() => {
      console.log('this.elementRef.nativeElement');
      const isClickable = this.clickable();
      if (isClickable) {
        this.addClickableEffect();
      } else {
        this.removeClickableEffect();
      }
    });
  
    ngOnDestroy() {
      this.removeClickableEffect();
    }
  
    private addClickableEffect() {
      // add clickable class
      this.renderer.addClass(this.elRef, 'g-clickable');
      this.renderer.addClass(this.elRef, 'not-clicked')
  
      // add tab index
      this.renderer.setAttribute(this.elRef, 'tabIndex', '0');
  
      // on click by mouse dispatch event
      this.clickMouseRef = this.renderer.listen(this.elRef, 'click', () => {
        this.itemClicked.emit();
      });
  
      // on click by keyboard dispatch event
      this.clickKeyboardRef = this.renderer.listen(
        this.elRef,
        'keydown.enter',
        () => {
          this.itemClicked.emit();
        }
      );
    }
  
    private removeClickableEffect() {
      // remove clickable class
      this.renderer.removeClass(this.elRef, 'g-clickable');
      // remove tab index
      this.renderer.removeAttribute(this.elRef, 'tabIndex');
      // remove click event listener
      if (this.clickMouseRef) {
        this.clickMouseRef();
      }
      // remove keyboard event listener
      if (this.clickKeyboardRef) {
        this.clickKeyboardRef();
      }
    }
  }
  