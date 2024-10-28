<script lang="ts">
    import { TrashBinOutline, EditOutline, CheckCircleOutline } from 'flowbite-svelte-icons';
	import type { TaskType } from '../types';
     import tasksStore from '@/store/tasks.store'
	import { onMount } from 'svelte';

    type Props = {
        taskItems : TaskType[]
    }
	const props : Props= $props()
    let editItem : null | TaskType = $state(null)
    const { taskItems } = props
    onMount(()=>{
        tasksStore.set(taskItems)
    })
    let editInputRef: HTMLInputElement | null = $state(null);

    let tasks: TaskType[] = $state([]);
    tasksStore.subscribe(value  => {
        tasks = value as TaskType[] || null;
    });

    const toggleTaskDone = (taskId: number) => tasksStore.toggleTaskDone(taskId);

    const deleteTask = (id: number) => tasksStore.deleteTask(id);

    const editTask = (task: TaskType) => {
        editItem = { ...task }; 
    };

    const updateTask = () => {
        if (editItem) {
            tasksStore.updateTask(editItem);
            editItem = null;
        }
    };


    const handleClickOutside = (event: any) => {
        if (
            !event.target?.closest('.task-button') &&
            !event.target?.closest('.task-input')
        ) {
            editItem = null;
        }
    };

    $effect(()=> {
        document.addEventListener('click', handleClickOutside)
        return ()=> {
            document.removeEventListener('click', handleClickOutside)
        }
    })

</script>
<ul>
    {#each tasks as task}
        <li class="flex items-center gap-3 border-b border-slate-200 py-2 last:border-0">
            <div class="flex-1 inline-flex items-center">
                <input
                    type="checkbox"
                    class="mr-2 "
                    id={`task-${task.id}`}
                    checked={task.done}
                    onclick={() => toggleTaskDone(task.id)}
                />
                {#if editItem && editItem.id == task.id}
                <input
                bind:this={editInputRef} 
                    type="text"
                    id="task"
                    bind:value={task.text}
                    class="task-input w-full flex-1 px-2 py-0.5 border rounded text-sm focus:outline-none focus:border-blue-500"
                    required
                    
                />
            {:else}
                <label for={`task-${task.id}`} class={`text-sm ${task.done ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                    {task.text}
                </label>
            {/if}
               
            </div>
            <div class="flex space-x-2">
                {#if editItem && editItem.id == task.id}
                <button  class="task-button text-gray-400" onclick={updateTask}><CheckCircleOutline color="green"/></button>

            {:else}

                <button class="task-button text-gray-400" onclick={() => editTask(task)}><EditOutline /></button>
            {/if}
                
                <button class="text-red-500" onclick={() => deleteTask(task.id)}><TrashBinOutline /></button>
            </div>
        </li>
    {/each}
</ul>