<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	import TaskList from './TaskList.svelte';
	import { onMount } from 'svelte';
	import tasksStore from '@/store/tasks.store';
	import type { TaskType } from '../types';
	import {clsx} from "clsx"
	type Props = {
        taskItems : TaskType[]
		tripId : string
    }
	const props : Props= $props()
    const { taskItems , tripId } = props

	let defaultModal = $state(false);
	let newTaskText = $state('');
    let tasks: TaskType[] = $state([]);

	tasksStore.subscribe(value  => {
        tasks = value as TaskType[] || null;
    });

	onMount(()=>{
        tasksStore.set(taskItems)
    })

	const addTaskModal = () => {
		defaultModal = true;
	};

	const addTask = () => {
		if(newTaskText.trim()){
			const newTask :Omit<TaskType, 'id'>  = {
				tripId : Number(tripId) ,
				text : newTaskText.trim(),
				done : false
			}
			tasksStore.addTask(newTask)
			newTaskText=""
		}
	};

</script>
<button class="mt-2 rounded bg-blue-500 px-2 py-1 text-white" onclick={addTaskModal}>Add Task</button>
<Modal title="Add tasks for your journey" bind:open={defaultModal} autoclose>
    <div class="content">
		<form onsubmit={addTask}>
			<div class="flex items-center gap-2  mb-4 ">
				<div class="form-field flex-1 ">
					<input
						placeholder="Type here.."
						type="text"
						id="task"
						bind:value={newTaskText}
						class="w-full  px-2 py-1 text-sm border rounded focus:outline-none focus:border-blue-500"
						required
					/>
	
				</div>
				<input type="submit" disabled={!newTaskText.length} class={`rounded  px-2 text-sm py-1 text-white cursor-pointer bg-blue-500 disabled:cursor-not-allowed disabled:bg-sky-400'}`} value="add"/>
	
			</div>
		</form>
	  <div class="max-h-96 overflow-y-auto px-4 -mx-4">
		<TaskList taskItems={tasks}/>
	  </div>
    </div>
</Modal>