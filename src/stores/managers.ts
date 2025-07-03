import { defineStore } from 'pinia';
import type { ITaskManager } from 'components/rowsInterfaces';
import { useStorage } from '@vueuse/core';

export const useManagerStore = defineStore('managers', {
  state: () => ({
    managerList: useStorage('managerList', [] as (ITaskManager | null)[]),
    defaultRowState: { tag: '', type: '2', login: null, password: null },
    options: [
      { label: 'Локальная ', value: '1' },
      { label: 'LDAP', value: '2' },
    ],
  }),
  getters: {
    defaultRowState(state) {
      return state.defaultRowState;
    },
    displayAccountsList(state) {
      return state.managerList.map((itm, i) => {
        return {
          tag:
            (itm?.tag ?? [])
              ?.map((tag) => {
                return tag?.text;
              })
              .join(';') || '',
          type: itm?.type || null,
          login: itm?.login || null,
          password: itm?.password || null,
          index: i,
        };
      });
    },
  },
  actions: {
    appendManager(data: ITaskManager = { tag: [], type: '2', login: null, password: null }) {
      const newRow = Object.assign({}, data);
      newRow.tag = newRow.tag?.split(';').map((tag: string) => {
        return { text: tag };
      });
      delete newRow?.index;
      this.managerList.push(newRow);
    },

    updateManager(row: ITaskManager, index: number) {
      const newRow = Object.assign({}, row);
      newRow.tag = newRow.tag?.split(';').map((tag: string) => {
        return { text: tag };
      });
      delete newRow?.index;
      this.managerList[index] = newRow;
    },
    removeManager(index: number) {
      this.managerList[index] = null;
    },
    clearManagerList() {
      this.managerList = this.managerList.filter((itm) => {
        return itm != null;
      });
    },
  },
});
