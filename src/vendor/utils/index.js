import ListToTree from 'list-to-tree';

export const list2tree = (list) => {
    const ltt = new ListToTree(list, {
        key_id: 'id',
        key_parent: 'parentId',
        key_child: 'children'
    });
    return ltt.GetTree();
};
