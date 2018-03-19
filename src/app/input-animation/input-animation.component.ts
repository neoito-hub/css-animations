import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-animation',
  templateUrl: './input-animation.component.html',
  styleUrls: ['./input-animation.component.css']
})
export class InputAnimationComponent implements OnInit {
  constructor() {
    window.onload = function() {
      let input;
      let cursor;
      let hiddenInput;
      let content = [];
      let lastContent = '';
      let targetContent = '';
      let inputLock = false;
      let autoWriteTimer;
      let isMobile;
      let isIE;
      isMobile = navigator && navigator.platform && navigator.platform.match(/^(iPad|iPod|iPhone)$/);
      isIE = navigator.appName === 'Microsoft Internet Explorer';
      input = document.getElementById('input');
      hiddenInput = document.getElementById('hiddenInput');
      hiddenInput.focus();
      cursor = document.createElement('cursor');
      cursor.setAttribute('class', 'blink');
      cursor.innerHTML = '|';
      // tslint:disable-next-line:curly
      if (!isMobile && !isIE) input.appendChild(cursor);
      function refresh() {
        inputLock = true;
        // tslint:disable-next-line:curly
        if (targetContent.length - lastContent.length === 0) return;

        // tslint:disable-next-line:prefer-const
        let v = targetContent.substring(0, lastContent.length + 1);

        content = [];

        let blinkPadding = false;

        for (let i = 0; i < v.length; i++) {
          const l = v.charAt(i);

          const d = document.createElement('div');
          d.setAttribute('class', 'letterContainer');

          const d2 = document.createElement('div');

          const animClass = i % 2 === 0 ? 'letterAnimTop' : 'letterAnimBottom';
          const letterClass = lastContent.charAt(i) === l ? 'letterStatic' : animClass;
          // tslint:disable-next-line:curly
          if (letterClass !== 'letterStatic') blinkPadding = true;
          d2.setAttribute('class', letterClass);
          d.appendChild(d2);
          d2.innerHTML = l;
          content.push(d);
        }
        input.innerHTML = '';
        for (let i = 0; i < content.length; i++) {
          input.appendChild(content[i]);
        }
        cursor.style.paddingLeft = blinkPadding ? '22px' : '0';

        // tslint:disable-next-line:curly
        if (!isMobile && !isIE) input.appendChild(cursor);

        // tslint:disable-next-line:curly
        if (targetContent.length - lastContent.length > 1) setTimeout(refresh, 150);
        else
          // tslint:disable-next-line:curly
          inputLock = false;
        lastContent = v;
      }

      if (document.addEventListener) {
        document.addEventListener(
          'touchstart',
          function(e) {
            clearInterval(autoWriteTimer);
            targetContent = lastContent;
          },
          false
        );

        document.addEventListener(
          'click',
          function(e) {
            clearInterval(autoWriteTimer);
            targetContent = lastContent;
            hiddenInput.focus();
          },
          false
        );

        if (!isIE) {
          hiddenInput.addEventListener(
            'input',
            function(e) {
              e.preventDefault();
              targetContent = hiddenInput.value;
              // tslint:disable-next-line:curly
              if (!inputLock) refresh();
            },
            false
          );
        } else {
          setInterval(function() {
            targetContent = hiddenInput.value;

            // tslint:disable-next-line:curly
            if (targetContent !== lastContent && !inputLock) refresh();
          }, 100);
        }
      }

      hiddenInput.value = '';

      autoWriteTimer = setTimeout(function() {
        // tslint:disable-next-line:curly
        if (lastContent !== '') return;
        targetContent = 'type something...';
        refresh();
      }, 2000);
    };
  }

  ngOnInit() {}
}
