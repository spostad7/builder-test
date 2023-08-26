import { useState, useEffect, useCallback } from 'react';
import {
	CaretRight,
	List,
	Photo,
	Route,
	Square,
	Svg,
	TextSize,
} from 'tabler-icons-react';
import { clx, isReactComponent } from '../components/utils/utils';

function Home() {
	const [tree, setTree] = useState({ id: 'root', children: [] });
	const tagComponents = {
		div: Square,
		svg: Svg,
		path: Route,
		img: Photo,
		ul: List,
		p: TextSize,
		h1: TextSize,
		h2: TextSize,
		h3: TextSize,
		h4: TextSize,
		h5: TextSize,
		h6: TextSize,
	};

	const buildTree = useCallback((node) => {
		console.log('node: ', isReactComponent(node));
		if (!node) return [];

		const treeItem = {
			id: `node-${Math.random().toString(36).substr(2, 9)}`, // Assign a unique ID
			tagName: node.tagName.toLowerCase(),
			children: [],
			isOpen: false, // Initially, children are hidden
		};

		for (let i = 0; i < node.children.length; i++) {
			const childNode = node.childNodes[i];
			if (childNode.nodeType === 1) {
				// Check if it's an element node (nodeType 1)
				treeItem.children.push(buildTree(childNode));
			}
		}

		return treeItem;
	}, []);

	const toggleNode = (node) => {
		const newTree = { ...tree };
		toggleNodeRecursively(newTree, node);
		setTree(newTree); // Update the state with the new copy
	};

	const toggleNodeRecursively = (nodes, targetNode) => {
		if (nodes.id === targetNode.id) {
			nodes.isOpen = !nodes.isOpen;
		} else if (nodes.children && nodes.children.length > 0) {
			for (let i = 0; i < nodes.children.length; i++) {
				toggleNodeRecursively(nodes.children[i], targetNode);
			}
		}
	};

	const renderTree = (node, depth = 0) => {
		const Icon = tagComponents[node.tagName] || Square;

		return (
			<ul className='tree-ul'>
				<li
					className={clx('tree-li leading-7', node.isOpen && 'open')}
					onClick={() => toggleNode(node)}
				>
					<div className='flex items-center relative'>
						{node.children.length > 0 && (
							<CaretRight
								fill='currentColor'
								size={16}
								className={clx(
									node.isOpen && 'rotate-90',
									'absolute left-0 transition-transform shrink-0'
								)}
							/>
						)}
						<div className='flex items-center gap-2 pl-5'>
							<Icon strokeWidth={1.5} size={20} />
							<span className='tree-li-tag'>{node.tagName}</span>
						</div>
					</div>
				</li>
				{node.isOpen && (
					<ul className='tree-ul'>
						{node.children.map((child) => (
							<li key={child.id} className='tree-li'>
								{renderTree(child, depth + 1)}
							</li>
						))}
					</ul>
				)}
			</ul>
		);
	};

	useEffect(() => {
		const iframe = document.getElementById('template');

		const handleIframeLoad = () => {
			const iframeDocument = iframe.contentWindow.document;
			const rootNode = iframeDocument.body;

			// Recursively build the tree view
			const treeStructure = {
				id: 'root',
				tagName: 'Wrapper',
				children: [buildTree(rootNode)],
			};

			setTree(treeStructure);
		};

		iframe.addEventListener('load', handleIframeLoad);

		return () => {
			iframe.removeEventListener('load', handleIframeLoad);
		};
	}, [buildTree]);

	return (
		<div className='w-full min-h-screen flex gap-10'>
			<aside className='bg-slate-900 text-white overflow-auto min-w-[20%] w-fit p-5'>
				<h2>DOM Tree View</h2>
				{renderTree(tree)}
			</aside>
			<iframe
				className='flex flex-1 m-10 rounded-2xl shadow-lg'
				id='template'
				src='/template'
			/>
		</div>
	);
}

export default Home;
