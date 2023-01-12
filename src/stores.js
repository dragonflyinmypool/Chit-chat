import { writable } from 'svelte/store';

export const formData = writable([
	{
		question: 'Tone',
		options: ['Flirt', 'Business', 'Casual'],
		seletected: 0
	},
	{
		question: 'From',
		options: ['Man', 'Woman'],
		seletected: 0
	},
	{
		question: 'To',
		options: ['Man', 'Woman'],
		seletected: 1
	},
	{
		question: 'Location',
		options: ['Resturant', 'Club', 'Bar', 'Office', 'Street', 'Plane', 'Other'],
		seletected: 0
	},
	{
		question: 'Language',
		options: ['English', 'Spanish', 'French', 'Arabic', 'German', 'Other'],
		seletected: 0
	}
]);
