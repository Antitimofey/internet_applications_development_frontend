// modules/mock.ts
import type { Dataset } from "../components/DatasetCard/DatasetCard";

// import ResNet_50_and_CIFAR_10 from "../src/assets/dataset-imgs/ResNet-50 and CIFAR-10.png"
import ResNet_50_and_ImageNet_1k from "../src/assets/dataset-imgs/ResNet-50 and ImageNet-1k.png"
import ViT_Base_16_and_CIFAR_10 from "../src/assets/dataset-imgs/ViT-Base_16 and CIFAR-10.png"
import ViT_Base_16_and_ImageNet_1k from "../src/assets/dataset-imgs/ViT-Base_16 and ImageNet-1k.png"
import YOLOv5m_and_COCO from "../src/assets/dataset-imgs/YOLOv5m and COCO.png"
import YOLOv5s_and_COCO from "../src/assets/dataset-imgs/YOLOv5s and COCO.png"

export const DATASETS_MOCK: Dataset[] = [
    {
        id: 1,
    label: "ResNet-50 and ImageNet-1k",
    benchmark_performance: 1050,
    dataset_size: 1281167,
    is_active: true,
    img: ResNet_50_and_ImageNet_1k
},
{
    id: 2,
    label: "YOLO-v5s and COCO",
    benchmark_performance: 220,
    dataset_size: 330000,
    is_active: true,
    img: YOLOv5s_and_COCO
},
{
    id: 3,
    label: "YOLO-v8m and COCO",
    benchmark_performance: 125,
    dataset_size: 330000,
    is_active: true,
    img: YOLOv5m_and_COCO
},
{
    id: 4,
    label: "ViT-Base/16 and CIFAR-10",
    benchmark_performance: 1950,
    dataset_size: 60000,
    is_active: true,
    img: ViT_Base_16_and_CIFAR_10
},
{
    id: 5,
    label: "ViT-Base/16 and ImageNet-1k",
    benchmark_performance: 850,
    dataset_size: 1281167,
    is_active: true,
    img: ViT_Base_16_and_ImageNet_1k
},
{
    id: 0,
    label: "new_dataset",
    benchmark_performance: 0,
    dataset_size: 0,
    is_active: true,
    img: ""
},
];
