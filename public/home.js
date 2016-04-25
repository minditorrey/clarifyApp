'use strict';

$(() => {

	$('.newComment').click(openNewCommentModal);
})

function openNewCommentModal () {
	$('.modal').modal({show: true});
}