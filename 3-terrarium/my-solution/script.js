// Allow plants to be repositioned using mouse and touch events.

dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
        pos4 = 0;
        initialTopPos = terrariumElement.style.top;
        initialLeftPos = terrariumElement.style.left;

    terrariumElement.onpointerdown = pointerDrag;
    terrariumElement.ondblclick = resetPosition;
    
    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        // Get initial cursor position.
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Start the drag when the pointer moves.
        document.onpointermove = elementDrag;
        // Stop the drag when mouse button is released.
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        // Calculate the new cursor position.
		// pos1 = where the Xmouse WAS - where it IS
        pos1 = pos3 - e.clientX;
        // pos2 = where the Ymouse WAS - where it IS
        pos2 = pos4 - e.clientY;
        // Reset pos3 and pos4 to current Xmouse and Ymouse
        // locations respectively. 
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        // Set new position of element.
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    function stopElementDrag() {
        // Stop calculating when mouse button is released.
        document.onpointerup = null;
        document.onpointermove = null;
    }
    
    function resetPosition(e){
        // Move plant back to initial position.
        terrariumElement.style.top = initialTopPos
        terrariumElement.style.left = initialLeftPos
    }

    }