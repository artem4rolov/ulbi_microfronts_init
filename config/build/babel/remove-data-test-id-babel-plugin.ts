import { PluginItem } from '@babel/core';

// кастомный плагин, который будет удалять пропс DataTestId из пропсов компонентов для прод-сборки
export function removeDataTestIdBabelPlugin(): PluginItem {
  return {
    //https://astexplorer.net/
    visitor: {
      Program(path, state) {
        // пропсы, которые мы хотим удалить (передаем имя пропса в плагин)
        const forbiddenProps = state.opts.props || [];

        // идем по дереву
        path.traverse({
          JSXIdentifier(current) {
            // текущая нода
            const nodeName = current.node.name;

            // если в ноде есть этот пропс, удаляем его
            if (forbiddenProps.includes(nodeName)) {
              current.parentPath.remove();
            }
          },
        });
      },
    },
  };
}
