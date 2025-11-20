import { BlockManager, IBlockData, BasicType } from 'easy-email-core';

// Lazy initialize to avoid SSR issues
let tempEle: HTMLDivElement | null = null;
function getTempElement(): HTMLDivElement {
  if (!tempEle && typeof document !== 'undefined') {
    tempEle = document.createElement('div');
  }
  return tempEle!;
}

export function getBlockTitle(
  blockData: IBlockData,
  isFromContent = true
): string {
  if (blockData.title) return blockData.title;

  if (
    isFromContent &&
    (blockData.type === BasicType.TEXT || blockData.type === BasicType.BUTTON)
  ) {
    const element = getTempElement();
    if (element) {
      element.innerHTML = blockData.data.value.content;
      return element.innerText;
    }
  }

  const blockName = BlockManager.getBlockByType(blockData.type)?.name || '';
  return blockName;
}
