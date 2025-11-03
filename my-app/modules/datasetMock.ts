// modules/mock.ts
import type { Dataset } from "../components/DatasetCard/DatasetCard";

export const DATASETS_MOCK: Dataset[] = [
{
    id: 0,
    label: "None",
    benchmark_performance: 0,
    dataset_size: 0,
    is_active: true,
    img: ""
},
{
    id: 1,
    label: "ResNet-50 and ImageNet-1k",
    benchmark_performance: 1050,
    dataset_size: 1281167,
    is_active: true,
    img: "http://localhost:9000/datasets/images/2025/11/03/bef5ca1f-bebe-4805-aeae-5af02d3fc81a.png"
},
{
    id: 2,
    label: "YOLO-v5s and COCO",
    benchmark_performance: 220,
    dataset_size: 330000,
    is_active: true,
    img: "http://localhost:9000/datasets/images/2025/11/03/2ac5c2e8-e8a5-4b06-b175-78257139c72c.png"
},
{
    id: 3,
    label: "YOLO-v8m and COCO",
    benchmark_performance: 125,
    dataset_size: 330000,
    is_active: true,
    img: "http://localhost:9000/datasets/images/2025/11/03/df94a3a9-f7c2-41e5-a6b9-523c402c671f.png"
},
{
    id: 4,
    label: "ViT-Base/16 and CIFAR-10",
    benchmark_performance: 1950,
    dataset_size: 60000,
    is_active: true,
    img: ""
},
{
    id: 5,
    label: "ViT-Base/16 and ImageNet-1k",
    benchmark_performance: 850,
    dataset_size: 1281167,
    is_active: true,
    img: ""
}
];
